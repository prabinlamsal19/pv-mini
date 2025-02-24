import 'package:flutter/material.dart';
import 'package:pv_system/utils/text_style.dart';

abstract class ServiceBox extends StatelessWidget {
  const ServiceBox({super.key});

  String get text;

  Color get color;

  List<Widget> get buttons;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(24),
      width: 400,
      height: 300,
      color: color,
      child: Column(
        children: [
          Text(text, style: PicoTextStyle.heading1),
          SizedBox(
            height: 16,
          ),
          Wrap(
            children: [...buttons],
          )
        ],
      ),
    );
  }
}

class DolbyService extends ServiceBox {
  const DolbyService({super.key});

  @override
  String get text => 'Dolby';

  @override
  Color get color => Colors.green;

  @override
  List<Widget> get buttons => [
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Create User'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Make Payment'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Add Movie'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Create stock'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Buy Food'))),
      ];
}

class AmphiService extends ServiceBox {
  const AmphiService({super.key});

  @override
  String get text => 'Amphi';

  @override
  Color get color => Colors.yellow;

  @override
  List<Widget> get buttons => [
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Create User'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Make Payment'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Sync to FDB'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Add Movie'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Create stock'))),
        Padding(padding: EdgeInsets.all(12), child: ElevatedButton(onPressed: () {}, child: Text('Buy Food'))),
      ];
}
