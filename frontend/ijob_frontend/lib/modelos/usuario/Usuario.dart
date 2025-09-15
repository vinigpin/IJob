import '../prestador.dart';

class Usuario {
  final String? celular;
  final String? email;
  final String senha;
  final String nome;
  final String regiao;
  final String? enderecoFoto;
  final String? cpf;
  final Prestador? prestador;

  const Usuario({
    this.celular,
    this.email,
    required this.senha,
    required this.nome,
    required this.regiao,
    this.enderecoFoto,
    this.cpf,
    this.prestador,
  });

  factory Usuario.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'senha': String senha,
        'nome': String nome,
        'regiao': String regiao,
      } =>
        Usuario(
          celular: json['celular'] as String?,
          email: json['email'] as String?,
          senha: senha,
          nome: nome,
          regiao: regiao,
          enderecoFoto: json['enderecoFoto'] as String?,
          cpf: json['cpf'] as String?,
          prestador: json['prestador'] is Map<String, dynamic>
              ? Prestador.fromJson(json['prestador'])
              : null,
        ),
      _ => throw const FormatException('Não foi possível mapear as informações'),
    };
  }
}
