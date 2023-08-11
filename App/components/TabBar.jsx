import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../constants/colors"

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", backgroundColor: colors.fondo}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.rowActive : styles.row}
          >
            <Text style={{ color: isFocused ? colors.verde : colors.negro, fontWeight: "bold", fontSize: 16 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    rowActive: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 5,
      borderBottomColor: colors.verde,
    },
})