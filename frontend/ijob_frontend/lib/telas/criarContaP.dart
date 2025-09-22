import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';

class CadastroProfissionalPage extends StatelessWidget {
  const CadastroProfissionalPage({super.key});

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
                    "Criar conta profissional",
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
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(20),
                child: Column(
                  children: [
                    _buildTextField("Nome"),
                    _buildTextField("Telefone"),
                    Row(
                      children: [
                        Expanded(child: _buildTextField("Região")),
                        const SizedBox(width: 10),
                        Expanded(child: _buildTextField("Nascimento")),
                      ],
                    ),
                    _buildTextField("CPF"),
                    _buildTextField("Serviços"),
                    _buildTextField("Biografia", maxLines: 3),
                    Row(
                      children: [
                        Expanded(child: _buildTextField("Foto")),
                        const SizedBox(width: 10),
                        Expanded(child: _buildTextField("Valor")),
                      ],
                    ),
                    _buildTextField("Senha", obscure: true),
                    _buildTextField("Repetir senha", obscure: true),

                    const SizedBox(height: 20),
                    const Text(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 12, color: Colors.black54),
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
                          "Criar conta",
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

  Widget _buildTextField(String hint,
      {bool obscure = false, int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextField(
        obscureText: obscure,
        maxLines: maxLines,
        decoration: InputDecoration(
          hintText: hint,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(6),
          ),
          contentPadding:
              const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
        ),
      ),
    );
  }
}
