import { Drawer } from "expo-router/drawer";
import { Entypo, AntDesign } from '@expo/vector-icons'; 

export default function Layout() {
    return <Drawer>
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: "Index",
                title: "Index",
                drawerIcon: () => <AntDesign name="caretright" size={24} color="black" />
            }}
        />
        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: "Home",
                title: "Home",
                drawerIcon: () => <Entypo name="home" size={24} color="black" />
            }}
        />
        <Drawer.Screen
            name="sobre"
            options={{
                title: "Sobre",
                drawerItemStyle: {height: 0}
            }}
        />
        <Drawer.Screen
            name="cadastro"
            options={{
                title: "Cadastro",
                drawerItemStyle: {height: 0}
            }}
        />
        <Drawer.Screen
            name="styles"
            options={{
                drawerItemStyle: {height: 0}
            }}
        />

    </Drawer>;
}