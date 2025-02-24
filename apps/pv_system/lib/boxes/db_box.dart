import 'package:flutter/material.dart';
import 'package:pv_system/utils/text_style.dart';

abstract class DbBox extends StatelessWidget {
  const DbBox({super.key});

  String get text;
  Color get color;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          text,
          style: PicoTextStyle.heading2,
        ),
        Container(
          color: color,
          height: 250,
          width: 500,
          child: SingleChildScrollView(
            child: Text('User: Prabin Lamsal'),
          ),
        )
      ],
    );
  }
}

class AmphiDB extends DbBox {
  const AmphiDB({super.key});

  @override
  String get text => 'AmphiDB';

  @override
  Color get color => Colors.yellow.shade100;
}

class DolbyDB extends DbBox {
  const DolbyDB({super.key});

  @override
  String get text => 'DolbyDb';

  @override
  Color get color => Colors.green.shade100;
}

class Kafka extends DbBox {
  const Kafka({super.key});

  @override
  String get text => 'Kafka';

  @override
  Color get color => Colors.orange.shade300;
}
