import DrawerItems from "./ DrawerItems";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";
import ReferScreen from "./ReferScreen";

export default function DrawerNavigationRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Refer"
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        {DrawerItems.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={drawer.name === "Profile" ? ProfileScreen : ReferScreen}
          />
        ))}
      </Drawer.Navigator>
    </>
  );
}
