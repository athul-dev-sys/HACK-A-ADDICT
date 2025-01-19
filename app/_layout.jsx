import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider,useAuth,setAuthUser } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { getUserData } from '../services/userService'

LogBox.ignoreLogs(['Warning: TNodeChildrenRenderer','Warning: MemoizedTNodeRenderer','Warning: TRenderEngineProvider']); 

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const {setAuthUser,setUserData} = useAuth();
  const router=useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      //console.log("session user-",session?.user.id);
      if(session){
        updateUserData(session?.user,session?.user?.email);
        setAuthUser(session?.user);
        router.replace('/home');
      }else{
        setAuthUser(null);
        router.replace('/welcome');
      }
    })
  },[]);
  const updateUserData=async (user,email)=>{
    let res= await getUserData(user?.id);
    if(res.success){
      setUserData({...res.data,email});
    }
  }
  return (
    <Stack
    screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen
       name="(main)/postDetails.jsx"
       options={{
        presentation:'modal'
       }}
    />
    </Stack>
  )
}


export default _layout