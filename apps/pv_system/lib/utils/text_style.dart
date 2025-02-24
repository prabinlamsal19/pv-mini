import 'package:flutter/material.dart';

class PicoTextStyle {
  // Define default font family (optional)
  static const String _defaultFontFamily = 'Roboto';

  // Headings
  static TextStyle get heading1 => TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.bold,
        fontFamily: _defaultFontFamily,
        color: Colors.black,
      );

  static TextStyle get heading2 => TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.w600,
        fontFamily: _defaultFontFamily,
        color: Colors.black87,
      );

  static TextStyle get heading3 => TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w500,
        fontFamily: _defaultFontFamily,
        color: Colors.black54,
      );

  // Body Text
  static TextStyle get bodyText1 => TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.normal,
        fontFamily: _defaultFontFamily,
        color: Colors.black87,
      );

  static TextStyle get bodyText2 => TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.normal,
        fontFamily: _defaultFontFamily,
        color: Colors.black54,
      );

  // Subtitle
  static TextStyle get subtitle => TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.w500,
        fontFamily: _defaultFontFamily,
        color: Colors.grey[700],
      );

  // Caption
  static TextStyle get caption => TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.normal,
        fontFamily: _defaultFontFamily,
        color: Colors.grey[600],
      );

  // Button Text
  static TextStyle get buttonText => TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.bold,
        fontFamily: _defaultFontFamily,
        color: Colors.white,
      );

  // Custom TextStyle with parameters
  static TextStyle custom({
    double fontSize = 16,
    FontWeight fontWeight = FontWeight.normal,
    Color color = Colors.black,
    String? fontFamily,
    FontStyle fontStyle = FontStyle.normal,
    double letterSpacing = 0.0,
    double height = 1.2,
  }) {
    return TextStyle(
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontFamily: fontFamily ?? _defaultFontFamily,
      color: color,
      fontStyle: fontStyle,
      letterSpacing: letterSpacing,
      height: height,
    );
  }
}
