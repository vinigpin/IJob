import 'package:flutter/material.dart';
import 'package:ijob_frontend/telas/inicio.dart';
import './telas/login.dart';
import './telas/inicio.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: TelaInicio()
      ),
    );
  }
}
