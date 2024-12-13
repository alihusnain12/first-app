import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Services from './screens/services';
import SelfAssessmentrService from './screens/selfAssessmentrService';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import Foundation from 'react-native-vector-icons/Foundation'
import SelfAssessmentServices2 from './screens/selfAssessmentServices2';
import PayrollTax from './screens/payrollTax';
import VAT from './screens/VAT';
import CompanyTax from './screens/companyTax';
import ProgressTracker from './screens/progressTracker';
import Chat from './screens/chat';
import Account from './screens/account';
import History from './screens/history';
import EditProfile from './screens/editProfile';
import HelpCenter from './screens/helpCenter';
import PrivacyPolicy from './screens/privacy&policy';
import TermsCondition from './screens/Terms&Condition';
import Notification from './screens/notification';
import Review from './screens/review';
import WriteReview from './screens/writeReview';
import Messages from './screens/messages';
import Index from './screens';
import GetStarted from './screens/getStarted';
import Login from './screens/login';
import Register from './screens/register';
import Otp from './screens/otp';
import Forget from './screens/forgetPassword';
import success from './screens/success';

// Create your navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define Tab Navigator for Home and About
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ) 
        }} 
      />
      <Tab.Screen 
        name="Services" 
        component={Services} 
        options={{ 
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ) 
        }} 
      />
      <Tab.Screen 
      name='Progress'
      component={ProgressTracker}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Foundation name="graph-bar" color={color} size={size} />
        ) 
      }}
      />
      <Tab.Screen 
      name='Chat'
      component={Chat}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbox-outline" color={color} size={size} />
        ) 
      }}
      />
    </Tab.Navigator>
  );
}

// Main App component with Stack Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' component={Index}/>
        <Stack.Screen name='getStarted' component={GetStarted}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='otp' component={Otp}/>
        <Stack.Screen name='forget' component={Forget}/>
        <Stack.Screen name='success' component={success}/>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="selfAssessmentrService" component={SelfAssessmentrService} />
        <Stack.Screen name="selfAssessmentService2" component={SelfAssessmentServices2} />
        <Stack.Screen name="payrolltax" component={PayrollTax} />
        <Stack.Screen name="VAT" component={VAT} />
        <Stack.Screen name="CompanyTax" component={CompanyTax}/>
        <Stack.Screen name='account' component={Account}/>
        <Stack.Screen name='history' component={History}/>
        <Stack.Screen name='editProfile' component={EditProfile}/>
        <Stack.Screen name='helpCenter' component={HelpCenter}/>
        <Stack.Screen name='privacy&policy' component={PrivacyPolicy}/>
        <Stack.Screen name='termsAndCondition' component={TermsCondition}/>
        <Stack.Screen name='Notifications' component={Notification}/>
        <Stack.Screen name='Review' component={Review}/>
        <Stack.Screen name='WriteReview' component={WriteReview}/>
        <Stack.Screen name='Messages' component={Messages}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});