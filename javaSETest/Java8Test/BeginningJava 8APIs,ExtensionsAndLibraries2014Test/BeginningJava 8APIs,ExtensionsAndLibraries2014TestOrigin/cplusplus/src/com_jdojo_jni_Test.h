/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class com_jdojo_jni_Test */

#ifndef _Included_com_jdojo_jni_Test
#define _Included_com_jdojo_jni_Test
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     com_jdojo_jni_Test
 * Method:    sayHello
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_com_jdojo_jni_Test_sayHello
  (JNIEnv *, jobject);

/*
 * Class:     com_jdojo_jni_Test
 * Method:    printMsg
 * Signature: (Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_jdojo_jni_Test_printMsg
  (JNIEnv *, jobject, jstring);

/*
 * Class:     com_jdojo_jni_Test
 * Method:    increment
 * Signature: ([II)[I
 */
JNIEXPORT jintArray JNICALL Java_com_jdojo_jni_Test_increment
  (JNIEnv *, jobject, jintArray, jint);

/*
 * Class:     com_jdojo_jni_Test
 * Method:    myMethod
 * Signature: (I[Ljava/lang/String;Ljava/lang/String;)D
 */
JNIEXPORT jdouble JNICALL Java_com_jdojo_jni_Test_myMethod__I_3Ljava_lang_String_2Ljava_lang_String_2
  (JNIEnv *, jobject, jint, jobjectArray, jstring);

/*
 * Class:     com_jdojo_jni_Test
 * Method:    myMethod
 * Signature: (D[Ljava/lang/String;Ljava/lang/String;)D
 */
JNIEXPORT jdouble JNICALL Java_com_jdojo_jni_Test_myMethod__D_3Ljava_lang_String_2Ljava_lang_String_2
  (JNIEnv *, jobject, jdouble, jobjectArray, jstring);

/*
 * Class:     com_jdojo_jni_Test
 * Method:    myMethod
 * Signature: (S[Ljava/lang/String;Ljava/lang/String;)D
 */
JNIEXPORT jdouble JNICALL Java_com_jdojo_jni_Test_myMethod__S_3Ljava_lang_String_2Ljava_lang_String_2
  (JNIEnv *, jobject, jshort, jobjectArray, jstring);

#ifdef __cplusplus
}
#endif
#endif
