import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';

class CadastroClientePage extends StatelessWidget {
  const CadastroClientePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                // Título
                const Text(
                  "Criar conta cliente",
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: AppColors.vinho,
                  ),
                ),
                const SizedBox(height: 20),

                // Campos
                _buildTextField("Nome"),
                _buildTextField("Telefone"),
                Row(
                  children: [
                    Expanded(child: _buildTextField("CEP")),
                    const SizedBox(width: 10),
                    Expanded(child: _buildTextField("Nascimento")),
                  ],
                ),
                _buildTextField("CPF"),
                _buildTextField("Senha", obscure: true),
                _buildTextField("Repetir senha", obscure: true),

                const SizedBox(height: 20),

                // Texto explicativo
                const Text(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, color: Colors.black54),
                ),

                const SizedBox(height: 20),

                // Botão Criar conta
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.vermelhoMedio,
                      padding: const EdgeInsets.symmetric(vertical: 15),
                    ),
                    child: const Text("Criar conta"),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(String hint, {bool obscure = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextField(
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
}
