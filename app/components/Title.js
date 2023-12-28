import { Text} from "react-native";

function Title({content,color,size}) { 
    return (
    <Text 
        style={{   
        color: color,
        fontSize: size,
        textAlign: 'center'
    }}>
        {content}
    </Text>
    );
}
export default Title;