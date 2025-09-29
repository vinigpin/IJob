import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:ijob_frontend/cores/AppColors.dart';
import 'package:http/http.dart' as http;
import 'package:ijob_frontend/modelos/usuario/Usuario.dart';
import 'package:ijob_frontend/telas/home.dart';

class ModificaClientePage extends StatelessWidget {
  const ModificaClientePage({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}

Future<bool> modificarDados(Usuario user) async {
  final url = Uri.parse(
    "http://localhost:3000/api/usuarios/usuario/:${user.id}",
  );
  try {
    final http.Response response = await http.put(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(user),
    );
    if (response.statusCode == 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    print("Exeção: $e");
    return false;
  }
}

Future<bool> deletarConta(String id, BuildContext context) async {
  final url = Uri.parse("http://localhost:3000/api/usuarios/deletar/${id}");
  try {
    final http.Response response = await http.delete(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
    if (response.statusCode == 200) {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => const TelaHome()),
      );
      return true;
    } else {
      return false;
    }
  } catch (e) {
    print("Exeção: $e");
    return false;
  }
}
