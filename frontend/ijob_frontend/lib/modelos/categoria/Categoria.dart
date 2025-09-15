import 'package:flutter/material.dart';

class Categoria {
  final String nome;
  final Color cor;

  const Categoria({
    required this.nome,
    required this.cor
  });

  factory Categoria.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {'nome': String nome, 'cor': int corHex} => Categoria(
        nome: nome,
        cor: Color(corHex)
      ),
      _ => throw const FormatException('Não foi possível mapear as informações')
    };
  }
}
