import 'package:flutter/material.dart';

class BtnIjob extends StatelessWidget {
  final VoidCallback? onPressed;
  final String texto;

  const BtnIjob({
    Key? key,
    required this.onPressed,
    required this.texto,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed, 
      style: ButtonStyle(

      ),
      child: Text(
        texto,
        style: TextStyle(

        ),
      )
      );
  }
}
