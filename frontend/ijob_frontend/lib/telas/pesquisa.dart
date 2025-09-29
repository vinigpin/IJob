import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:ijob_frontend/modelos/categoria/Categoria.dart';
import 'package:http/http.dart' as http;

class PesquisaPage extends StatelessWidget {
  const PesquisaPage({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}

Future<List<Categoria>> modificarDados() async {
  final url = Uri.parse("http://localhost:3000/api/categorias/categorias}");
  try {
    final http.Response response = await http.get(url);
    if (response.statusCode == 200) {
      final List<dynamic> listaJson =
          jsonDecode(response.body) as List<dynamic>;
      final List<Categoria> categorias = [];

      listaJson.forEach((json) {
        categorias.add(Categoria.fromJson(json as Map<String, dynamic>));
      });
      return categorias;
    } else {
      return [];
    }
  } catch (e) {
    print("Exeção: $e");
    return [];
  }
}
