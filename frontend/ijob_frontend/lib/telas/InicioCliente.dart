import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';

class TelaClienteHome extends StatefulWidget {
  const TelaClienteHome({super.key});

  @override
  State<TelaClienteHome> createState() => _TelaClienteHomeState();
}

class _TelaClienteHomeState extends State<TelaClienteHome> {
  int _selectedIndex = 1; // começa no "Procurar"

  final List<String> categorias = [
    "Eletricista",
    "Encanador",
    "Detetizador",
    "Cozinheiro",
    "Faxineiro",
    "Mecânico",
    "Técnico de informática",
    "Baba",
  ];

  final List<Color> cores = [
    Colors.amber.shade700,
    Colors.deepPurple.shade600,
    Colors.purpleAccent.shade400,
    Colors.orange.shade600,
    Colors.blue.shade400,
    Colors.cyan.shade600,
    Colors.purple.shade700,
    Colors.red.shade600,
      ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      // Aqui você pode trocar a tela conforme o index
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,

      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Faixa vermelha com logo
            Container(
              color: AppColors.vermelhoMedio,
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 15),
              child: Center(
                child: Image.asset(
                  "imgs/logo2_ijob.png",
                  height: 60,
                ),
              ),
            ),

            const SizedBox(height: 10),

            // Campo de busca
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: TextField(
                decoration: InputDecoration(
                  hintText: "Procurar",
                  prefixIcon: const Icon(Icons.search),
                  suffixIcon: const Icon(Icons.close),
                  filled: true,
                  fillColor: Colors.white,
                  contentPadding: const EdgeInsets.symmetric(vertical: 0, horizontal: 15),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey.shade400),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: AppColors.vermelhoMedio, width: 2),
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
            ),

            const SizedBox(height: 20),

            // Título categorias
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(
                "Categorias",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: AppColors.vinho,
                ),
              ),
            ),

            const SizedBox(height: 10),

            // Lista de categorias
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                itemCount: categorias.length,
                itemBuilder: (context, index) {
                  return Container(
                    margin: const EdgeInsets.symmetric(vertical: 5),
                    decoration: BoxDecoration(
                      color: cores[index],
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: ListTile(
                      title: Text(
                        categorias[index],
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      trailing: const Icon(Icons.arrow_forward_ios, color: Colors.white, size: 18),
                      onTap: () {
                        // Navegar para tela de resultados da categoria
                      },
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),

      // Bottom Navigation
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        selectedItemColor: AppColors.vermelhoMedio,
        unselectedItemColor: Colors.grey,
        onTap: _onItemTapped,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Home",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: "Procurar",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list_alt),
            label: "Registros",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Conta",
          ),
        ],
      ),
    );
  }
}
