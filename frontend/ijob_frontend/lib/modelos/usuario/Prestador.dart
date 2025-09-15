class Prestador {
  final int? contaCadastrada;
  final List<String> categorias;
  final DateTime? nascimento;
  final double? valor;

  const Prestador({
    this.contaCadastrada,
    required this.categorias,
    this.nascimento,
    this.valor,
  });

  factory Prestador.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'categorias': List categoriasJson,
      } =>
        Prestador(
          contaCadastrada: json['contaCadastrada'] is int
              ? json['contaCadastrada'] as int
              : null,
          categorias: categoriasJson.cast<String>(),
          nascimento: json['nascimento'] is String
              ? DateTime.parse(json['nascimento'])
              : null,
          valor: json['valor'] is num ? (json['valor'] as num).toDouble() : null,
        ),
      _ => Prestador(categorias: const []), // fallback se prestador vier vazio
    };
  }
}
