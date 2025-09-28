import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';
import 'package:http/http.dart' as http;

void login(BuildContext context, String user, String senha){
  final res = await consultaLogin(user, senha);
  if (res.statusCode  == 201){
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const ExibirNomePage(nome: Usuario.fromJson(jsonDecode(res.body) as Map<String, dynamic>).nome)
        ) // isso nao foi testado
    );
  }
}

Future<http.Response> consultaLogin(String user, String senha){
  return http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/albums'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode({'celular': user, 'senha': senha}),
  );
}

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});
  final telefoneCon = TextEditingController()
  final senhaCon = TextEditingController()

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // Topo vermelho
            Container(
              color: AppColors.vermelhoMedio,
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 15),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    "Entrar",
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, color: Colors.white),
                    onPressed: () => Navigator.pop(context),
                  ),
                ],
              ),
            ),

            // Conteúdo
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _buildTextField("Telefone", telefoneCon),
                    _buildTextField("Senha", senhaCon, obscure: true),

                    const SizedBox(height: 10),

                    Align(
                      alignment: Alignment.centerLeft,
                      child: TextButton(
                        onPressed: () {
                          login(context, telefoneCon.text, senhaCon.text);
                        },
                        child: const Text(
                          "Esqueceu sua senha?",
                          style: TextStyle(color: Colors.black54),
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),

                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.vermelhoMedio,
                          padding: const EdgeInsets.symmetric(vertical: 15),
                        ),
                        child: const Text(
                          "Entrar",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

Widget _buildTextField(
  String hint,
  TextEditingController controller, {
  bool obscure = false,
}) {
  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 8),
    child: TextField(
      controller: controller, // 🔹 agora o campo é controlado
      obscureText: obscure,
      decoration: InputDecoration(
        hintText: hint,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(6),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 12),
      ),
    ),
  );
}




// classe de teste
class ExibirNomePage extends StatelessWidget {
  final String nome;

  const ExibirNomePage({
    Key? key,
    required this.nome,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Exibir Nome")),
      body: Center(
        child: Text(
          "Nome: $nome",
          style: const TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
