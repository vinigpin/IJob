import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Logo
            Container(
              padding: const EdgeInsets.only(top: 20),
              child: Image.asset(
                "assets/logo3.png", 
                height: 150,
              ),
            ),

            const SizedBox(height: 20),

            // Título
            const Text(
              "Bem-vindo ao IJob",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: AppColors.vinho,
              ),
            ),

            const SizedBox(height: 10),

            // Texto de descrição
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 30.0),
              child: Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.black54,
                ),
              ),
            ),

            const SizedBox(height: 30),

            // Botão Criar conta profissional
            SizedBox(
              width: 250,
              child: ElevatedButton(
                onPressed: () {
                  // ação aqui
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.vermelhoMedio,
                  padding: const EdgeInsets.symmetric(vertical: 15),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(6),
                  ),
                ),
                child: const Text(
                  "Criar conta profissional",
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
              ),
            ),

            const SizedBox(height: 10),

            // Botão Criar conta cliente
            SizedBox(
              width: 250,
              child: ElevatedButton(
                onPressed: () {
                  // ação aqui
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.vermelhoMedio,
                  padding: const EdgeInsets.symmetric(vertical: 15),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(6),
                  ),
                ),
                child: const Text(
                  "Criar conta cliente",
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
              ),
            ),

            const SizedBox(height: 20),

            // Texto "Já possui uma conta?"
            const Text(
              "Já possui uma conta?",
              style: TextStyle(color: Colors.black87),
            ),

            const SizedBox(height: 10),

            // Botão Entrar
            SizedBox(
              width: 250,
              child: OutlinedButton(
                onPressed: () {
                  // ação aqui
                },
                style: OutlinedButton.styleFrom(
                  side: BorderSide(color: AppColors.vermelhoClaro),
                  padding: const EdgeInsets.symmetric(vertical: 15),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(6),
                  ),
                ),
                child: Text(
                  "Entrar",
                  style: TextStyle(
                    color: AppColors.vermelhoClaro,
                    fontSize: 16,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
