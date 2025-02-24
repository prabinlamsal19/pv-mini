import 'package:flutter/material.dart';
import 'package:pv_system/boxes/db_box.dart';
import 'package:pv_system/boxes/service_box.dart';

class PicoHomePage extends StatelessWidget {
  const PicoHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Column(children: [DolbyService(), DolbyDB()]),
              Column(children: [AmphiService(), AmphiDB()]),
            ],
          ),
          Image.asset('assets/kafka.png'),
          Kafka()
        ],
      ),
    );
  }
}
