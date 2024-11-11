#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>
// Token generation and JSON parsing
#include "addons/TokenHelper.h"
#include <ArduinoJson.h>

// Wi-Fi credentials
// #define WIFI_SSID "realme X7 Max"      // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "1234567i"      // Replace with your Wi-Fi password
#define WIFI_SSID "Excitel-2.4G"        // Replace with your Wi-Fi SSID
#define WIFI_PASSWORD "AA0327927"      // Replace with your Wi-Fi password
// #define WIFI_SSID "HOME 2.4GHz"    // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "12345678"  // Replace with your Wi-Fi password

// Firebase configuration
#define API_KEY "AIzaSyD99Zl8a6NWul1Fu-oEAC3IfH3yMkBae7Q"  // Your Firebase API key
#define FIREBASE_PROJECT_ID "iot-smartroom-1abef"

// Firebase user credentials
#define USER_EMAIL "ashu2100ag@gmail.com"
#define USER_PASSWORD "Ashu2017ag@"

// Firebase and Wi-Fi objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Pin definitions
int FAN1_PIN = 12;
int FAN2_PIN = 13;
int FAN3_PIN = 14;
int LIGHT1_PIN = 15;
int LIGHT2_PIN = 16;
int AC1_PIN = 17;
int AC2_PIN = 22;
int PriDOOR_PIN = 18;
int PubDOOR_PIN = 19;

// Ultrasonic Pins
int trigPin = 2;
int echoPin = 36;

// defining variables
long duration;
int distance;
bool doorValue = false;

// PIR motion sensor pin
int Pir_Pin = 39;
// value for pir sensor
int val=0;

void loop() {
  
val = digitalRead(Pir_Pin); // get the pir sensor value;
Serial.print("PIR: ");
Serial.println(val);
// For Fans
  if(val == HIGH)
  {
    digitalWrite(FAN1_PIN, HIGH);
  }else{
    digitalWrite(FAN1_PIN, controlFan("Fan 1") ? HIGH : LOW);
  }
  digitalWrite(FAN2_PIN, controlFan("Fan 2") ? HIGH : LOW);
  digitalWrite(FAN3_PIN, controlFan("Fan 3") ? HIGH : LOW);


// For Lights
  if(val == HIGH){
    digitalWrite(LIGHT1_PIN, HIGH);
  }else{
    digitalWrite(LIGHT1_PIN, LOW);
    digitalWrite(LIGHT1_PIN, controlLight("Light 1") ? HIGH : LOW);
  }
  
  digitalWrite(LIGHT2_PIN, controlLight("Light 2") ? HIGH : LOW);

// For ACs
  
  digitalWrite(AC1_PIN, controlAC("Ac 1") ? HIGH : LOW);
  digitalWrite(AC2_PIN, controlAC("Ac 2") ? HIGH : LOW);

// For Public Door Locks
  doorValue = ultrasonicValue();
  Serial.print("Door Value: ");
  Serial.println(doorValue);
  if(doorValue==true){
    digitalWrite(PubDOOR_PIN,HIGH);
  }
  else{
    digitalWrite(PubDOOR_PIN, controlDoor("Public_Door_Locks", "Public Lock 1") ? HIGH : LOW);
  }


// For Private Door Locks
  digitalWrite(PriDOOR_PIN, controlDoor("Private_Door_Locks", "Private Lock 1") ? HIGH : LOW);



  delay(10000); // Add delay to avoid exceeding Firebase's write limit
}


