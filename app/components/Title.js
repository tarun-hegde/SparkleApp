import { Text} from "react-native";

function Title({content,color,size}) { 
    return (
    <Text 
        style={{   
        color: color,
        fontSize: size,
        textAlign: 'center',
        marginBottom: 20,
    }}>
        {content}
    </Text>
    );
}
export default Title;