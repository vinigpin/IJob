
class Avaliacao {
  final String idServico;
  final DateTime data;
  final int nota;
  final String? conteudo;

  const Avaliacao({
    required this.idServico,
    required this.data,
    required this.nota,
    this.conteudo,
  });

  factory Avaliacao.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'idServico': String idServico,
        'data': String dataIso,
        'nota': int nota,
        'conteudo': String? conteudo,
      } =>
        Avaliacao(
          idServico: idServico,
          data: DateTime.parse(dataIso),
          nota: nota,
          conteudo: conteudo,
        ),
      _ => throw const FormatException('Não foi possível mapear as informações'),
    };
  }
}
