import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';
import 'criarContaP.dart';
import 'criarContaC.dart';
import 'login.dart';

class TelaHome extends StatefulWidget {
  const TelaHome({super.key});

  @override
  State<TelaHome> createState() => _HomeState();
}

class _HomeState extends State<TelaHome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          children: [
            // Faixa vermelha no topo
            Container(
              color: AppColors.vermelhoMedio,
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 15),
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.only(top: 20),
                    child: Image.asset(
                      'imgs/logo2_ijob.png',
                      height: 150,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
