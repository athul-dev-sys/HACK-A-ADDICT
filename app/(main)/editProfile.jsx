import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import { wp, hp } from '../../helpers/common';
import { theme } from '../../constants/theme';
import { useAuth } from '../../contexts/AuthContext';
import { Image } from 'expo-image';
import { getUserImageSrc, uploadFile } from '../../services/imageService';
import Icon from '../../assets/icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { updateUser } from '../../services/userService';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
  const { user: currentUser ,setUserData} = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    image: null,
    bio: '',
    address: ''
  });

  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser.name || '',
        phoneNumber: currentUser.phoneNumber || '',
        image: currentUser.image || null,
        address: currentUser.address || '',
        bio: currentUser.bio || '',
      });
    }
  }, [currentUser])

  const onPickImage = async () => {
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality:0.7,
    });
    if(!result.canceled){
      setUser({...user,image:result.assets[0]});
    }
  };

  const onSubmit = async () => {
    let userData = { ...user };
    let { name, phoneNumber, address, image ,bio } = userData;

    if (!name || !phoneNumber || !address || !bio || !image) {
      Alert.alert('Profile', 'Please fill all the fields');
      return;
    }
    setLoading(true);
    if(typeof image=='object'){
      let imageRes = await uploadFile('profiles',image?.uri,true);
      if(imageRes.success){
        userData.image = imageRes.data;
      }
      else{
        userData.image=null;
      }
    }
    const res = await updateUser(currentUser?.id, userData);
    setLoading(false);

    if(res.success){
      setUserData({...currentUser,...userData});
      router.back();
    }

    if (res.success) {
      Alert.alert('Success', 'Profile updated successfully!');
    } else {
      Alert.alert('Error', res.msg || 'An error occurred');
    }
  };

  let imageSource = user.image && typeof user.image=='object'? user.image.uri: getUserImageSrc(user.image);

  return (
    <ScreenWrapper bg="white"> 
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Header title="Edit Profile" />
          <View style={styles.form}>
            {/* Avatar Section */}
            <View style={styles.avatarContainer}>
              <Image source={imageSource} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={onPickImage}>
                <Icon name="camera" size={20} strokeWidth={2.5} />
              </Pressable>
            </View>

            {/* Instruction Section */}
            <Text style={styles.instructionText}>Please fill in your profile details below:</Text>

            {/* Name Input */}
            <Input
              icon={<Icon name="user" />}
              placeholder="Enter your name"
              value={user.name}
              onChangeText={(value) => setUser({ ...user, name: value })}
            />

            {/* Phone Number Input */}
            <Input
              icon={<Icon name="call" />}
              placeholder="Enter your phone number"
              value={user.phoneNumber}
              onChangeText={(value) => setUser({ ...user, phoneNumber: value })}
            />
            <Input
              icon={<Icon name="location" />}
              placeholder="Enter your address"
              value={user.address}
              onChangeText={(value) => setUser({ ...user, address: value })}
            />
            {/* Bio Input */}
            <Input
              placeholder="Enter your bio"
              value={user.bio}
              multiline={true}
              containerStyle={styles.bio}
              onChangeText={(value) => setUser({ ...user, bio: value })}
            />
            <Button title="Update" loading={loading} onPress={onSubmit} />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(4),
  },
  form: {
    marginTop: hp(2),
    gap: hp(2.5),
  },
  avatarContainer: {
    alignSelf: 'center',
    position: 'relative',
    width: hp(14),
    height: hp(14),
    marginBottom: hp(2),
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl * 1.8,
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: hp(1),
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  instructionText: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.textLight,
    marginBottom: hp(2),
  },
  input: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    padding: 17,
    paddingHorizontal: 20,
    gap: 15,
  },
  bio: {
    flexDirection: 'row',
    marginTop: hp(15),
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
});
