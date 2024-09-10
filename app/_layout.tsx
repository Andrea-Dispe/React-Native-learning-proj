import { Stack, Slot } from 'expo-router';

export default function Layout() {
  return (
    // Slot acts just like the children component, so in this case will render the Home component (index)
    <Slot />
    // <Stack
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: 'green',
    //     },
    //     headerTintColor: '#000',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}>
    //   {/* Optionally configure static options outside the route.*/}
    //   <Stack.Screen name="home" options={{}} />
    // </Stack>
  );
}
