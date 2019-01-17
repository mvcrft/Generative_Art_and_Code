/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class org_openkinect_freenect2_Device */

#ifndef _Included_org_openkinect_freenect2_Device
#define _Included_org_openkinect_freenect2_Device
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    initJNI
 * Signature: ()J
 */
JNIEXPORT jlong JNICALL Java_org_openkinect_freenect2_Device_jniInit
  (JNIEnv *, jobject);

/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    openJNI
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniOpen
  (JNIEnv *, jobject);
    
/*
 * Class:     openv2_Device
 * Method:    openJNI
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniOpenM
(JNIEnv *, jobject, jint index);
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    stopJNI
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniStop
(JNIEnv *, jobject);
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    stopJNI
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniEumerateDevices
(JNIEnv *, jobject);

/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    openJNI
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniOpenSerial
(JNIEnv *, jobject, jint );
    
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    etNumDevices
 * Signature: ()V
 */
JNIEXPORT jint JNICALL Java_org_openkinect_freenect2_Device_jniGetNumDevices
    (JNIEnv *, jobject);
    
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    etNumDevices
 * Signature: ()V
 */
JNIEXPORT jstring JNICALL Java_org_openkinect_freenect2_Device_jniGetSerialDevice
(JNIEnv *, jobject, jint );
    

/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetDepthData
  (JNIEnv *, jobject);
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
    
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetRawDepthData
(JNIEnv *, jobject);
    
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetIrData
(JNIEnv *, jobject);

/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetColorData
(JNIEnv *, jobject);
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetUndistorted
(JNIEnv *, jobject);
    
/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jfloatArray JNICALL Java_org_openkinect_freenect2_Device_jniGetDepthCameraPositions
(JNIEnv *, jobject);


/*
 * Class:     org_openkinect_freenect2_Device
 * Method:    jniGetDepthData
 * Signature: ()[I
 */
JNIEXPORT jintArray JNICALL Java_org_openkinect_freenect2_Device_jniGetRegistered
(JNIEnv *, jobject);
    
//enable
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniEnableVideo
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniEnableDepth
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniEnableIR
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniEnableRegistered
(JNIEnv *, jobject, jboolean);
    
//toggle
JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniToggleVideo
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniToggleDepth
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniToggleIR
(JNIEnv *, jobject, jboolean);

JNIEXPORT void JNICALL Java_org_openkinect_freenect2_Device_jniToggleRegistered
(JNIEnv *, jobject, jboolean);
    

#ifdef __cplusplus
}
#endif
#endif
