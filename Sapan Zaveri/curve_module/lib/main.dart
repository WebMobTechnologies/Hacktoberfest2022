import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        
        //
        
        
        
        
        
        
        //
        
        
        
        //
        
        
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  
  
  

  
  
  
  

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      
      
      
      
      
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    
    
    //
    
    
    
    return Scaffold(
      appBar: AppBar(
        
        
        
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        
        
        title: Text(widget.title),
      ),
      backgroundColor: Colors.amber,
      body: SineWave(),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), 
    );
  }
}


class SineWave extends CustomPaint {
  @override
  void paint(Canvas canvas) {
    final path = Path();


    path.moveTo(0, 0);


    for (int i = 0; i < 100; i++) {
      final x = i.toDouble();
      final y = sin(x) * 100;
      path.lineTo(x, y);
    }


    path.close();


    canvas.drawPath(path, Paint()
      ..color = Colors.blue);
  }

  @override
  Size get size => Size(1000, 800);
}