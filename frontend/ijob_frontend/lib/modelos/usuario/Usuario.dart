import 'prestador.dart';

class Usuario {
  final String id;
  final String? celular;
  final String? email;
  final String nome;
  final String regiao;
  final String? enderecoFoto;
  final String? cpf;
  final Prestador? prestador;

  const Usuario({
    required this.id,
    this.celular,
    this.email,
    required this.nome,
    required this.regiao,
    this.enderecoFoto,
    this.cpf,
    this.prestador,
  });

  factory Usuario.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {'nome': String nome, 'regiao': String regiao, '_id': String id} =>
        Usuario(
          id: id,
          celular: json['celular'] as String?,
          email: json['email'] as String?,
          nome: nome,
          regiao: regiao,
          enderecoFoto: json['enderecoFoto'] as String?,
          cpf: json['cpf'] as String?,
          prestador: json['prestador'] is Map<String, dynamic>
              ? Prestador.fromJson(json['prestador'])
              : null,
        ),
      _ => throw const FormatException(
        'Não foi possível mapear as informações',
      ),
    };
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'celular': celular,
      'email': email,
      'nome': nome,
      'regiao': regiao,
      'enderecoFoto': enderecoFoto,
      'cpf': cpf,
      'prestador': prestador
          ?.toJson(), // chama o toJson de Prestador se existir
    };
  }
}
