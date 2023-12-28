import { Text, View, SafeAreaView, TextInput } from "react-native"

const Input = ({ title, value, setValue, error, setError, secureTextEntry = false }) => {
    return (
        <>
     
            <TextInput
                placeholder={ error ? error : title}
                autoCapitalize="none"
                marginBottom={16}
                autoComplete='off'
                style={{
                    borderColor: error ? 'red' : 'gray',
                    height: 40,
                    width: "75%",
                    borderWidth: 1,
                    marginBottom: 20,
                    borderRadius: 10,
                    padding: 10,
                }}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => {
                    setValue(text)

                    if (error) {
                        setError('')
                    }
                }}
            />
        </>
    );
};

export default Input;