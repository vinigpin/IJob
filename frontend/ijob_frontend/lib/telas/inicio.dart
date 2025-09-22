import 'package:flutter/material.dart';
import '../cores/AppColors.dart';

class TelaInicio extends StatefulWidget {
  const TelaInicio({super.key});

  @override
  State<TelaInicio> createState() => _InicioState();
}

class _InicioState extends State<TelaInicio> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white, // fundo branco
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 5), // 5px nas laterais
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // 🔹 Imagem no topo
              Padding(
                padding: const EdgeInsets.only(top: 0),
                child: Image.asset(
                  'imgs/logo3_ijob.png', 
                  height: 280,
                ),
              ),

              // 🔹 Texto central
              Column(
                children: [
                  Text(
                    "Bem-vindo ao IJob!",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w900,
                      fontFamily: 'Montserrat',
                      color: AppColors.vinho
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 16, color: Colors.grey[600]),
                  ),
                ],
              ),

              // 🔹 Botões embaixo
              Padding(
                padding: const EdgeInsets.only(bottom: 32.0),
                child: Column(
                  children: [
                    // Botão 1
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.vermelhoMedio, // cor de fundo
                        foregroundColor: Colors.white, // cor do texto
                        minimumSize: const Size(double.infinity, 50), // largura total
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8), // borda arredondada
                        ),
                      ),
                      onPressed: () {},
                      child: const Text("Criar conta profissional"),
                    ),
                    const SizedBox(height: 12),

                    // Botão 2
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.vermelhoMedio,
                        foregroundColor: Colors.white,
                        minimumSize: const Size(double.infinity, 50),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      onPressed: () {},
                      child: const Text("Criar conta pessoal"),
                    ),
                    const SizedBox(height: 12),

                    // Botão 3 (outlined)
                    OutlinedButton(
                      style: OutlinedButton.styleFrom(
                        foregroundColor: AppColors.vermelhoMedio, // texto vermelho
                        side: BorderSide(color: AppColors.vermelhoMedio, width: 2), // borda
                        minimumSize: const Size(double.infinity, 50),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      onPressed: () {},
                      child: const Text("Continuar como visitante"),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
