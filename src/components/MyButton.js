import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export const MyButton = ({title, color = theme.colors.primary}, onPress)=> (
    <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
    >
        <Text style={[styles.buttonText, {color: color}]}>
                {title}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.l,
        borderRadius: theme.spacing.borderRadius
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})