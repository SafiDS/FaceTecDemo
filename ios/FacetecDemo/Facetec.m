//
//  Facetec.m
//  FacetecDemo
//
//  Created by ICS on 09/10/23.
//

// import RCTViewManager
#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#elif __has_include(“RCTViewManager.h”)
#import “RCTViewManager.h”
#else
#import “React/RCTViewManager.h” // Required when used as a Pod in a Swift project
#endif

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
@interface RCT_EXTERN_MODULE(Facetec, RCTViewManager)

RCT_EXTERN_METHOD(initializeSDK:(NSDictionary *)config onSuccess:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

RCT_EXTERN_METHOD(setCustomization:(NSDictionary *)theme)

RCT_EXTERN_METHOD(livenessCheck:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

RCT_EXTERN_METHOD(enrollUser:(NSString *)enrollUserId onSuccess:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

RCT_EXTERN_METHOD(authenticateUser:(NSString *)authenticateUserId onSuccess:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

RCT_EXTERN_METHOD(identityCheck:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

RCT_EXTERN_METHOD(identityScanOnly:(RCTResponseSenderBlock)onSuccess onError:(RCTResponseSenderBlock)onError)

@end
