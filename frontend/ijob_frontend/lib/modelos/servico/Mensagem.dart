class Mensagem {
  final String conteudo;
  final String remetente; // "cliente" ou "prestador"

  const Mensagem({
    required this.conteudo,
    required this.remetente,
  });

  factory Mensagem.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'conteudo': String conteudo,
        'remetente': String remetente,
      } =>
        Mensagem(
          conteudo: conteudo,
          remetente: remetente,
        ),
      _ => throw const FormatException('Não foi possível mapear as informações'),
    };
  }
}
