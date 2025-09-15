import 'Mensagem.dart';

class Servico {
  final String idCliente;
  final String idPrestador;
  final DateTime dataDeRequisicao;
  final DateTime? dataDeInicio;
  final String status;
  final DateTime? dataDeConclusao;
  final List<Mensagem> mensagens;

  const Servico({
    required this.idCliente,
    required this.idPrestador,
    required this.dataDeRequisicao,
    this.dataDeInicio,
    required this.status,
    this.dataDeConclusao,
    required this.mensagens,
  });

  factory Servico.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'idCliente': String idCliente,
        'idPrestador': String idPrestador,
        'dataDeRequisicao': String dataReqIso,
        'status': String status,
        'mensagens': List mensagensJson,
      } =>
        Servico(
          idCliente: idCliente,
          idPrestador: idPrestador,
          dataDeRequisicao: DateTime.parse(dataReqIso),
          dataDeInicio: json['dataDeInicio'] is String
              ? DateTime.parse(json['dataDeInicio'])
              : null,
          status: status,
          dataDeConclusao: json['dataDeConclusao'] is String
              ? DateTime.parse(json['dataDeConclusao'])
              : null,
          mensagens: mensagensJson
              .map((m) => Mensagem.fromJson(m as Map<String, dynamic>))
              .toList(),
        ),
      _ => throw const FormatException('Não foi possível mapear as informações'),
    };
  }
}
