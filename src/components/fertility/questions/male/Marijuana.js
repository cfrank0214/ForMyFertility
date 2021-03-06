import React from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import * as Progress from 'react-native-progress';
import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    Content,
    Button,
    Text,
    View
} from 'native-base';

let marijuana = [];
let curYear = (new Date()).getFullYear();
let youngFertility = curYear - 13;
let oldFertility = curYear - 60;
let questionNum, questionTot;
for (let i = youngFertility; i >= oldFertility; i--) {
    marijuana.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class Marijuana extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('JobActivity')
    }

    render() {
        questionNum = this.props.maleQuestions ? this.props.maleQuestions.questionNum : 1;
        questionTot = this.props.maleQuestions ? this.props.maleQuestions.questionTot : 1;;
        const { dispatch } = this.props;
        const navigation = this.props.navigation;
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text> Questions {questionNum} of {questionTot}</Text>
                    <Progress.Bar progress={(questionNum / questionTot)} width={200} />
                </View>
                <Form model="maleQuestions" >
                    <Text>How often do you use marijuana?</Text>
                    <Control.Picker model=".marijuana" >
                        <Picker.Item label='Never' value='never' />
                        <Picker.Item label='Once a week or less' value='1>week' />
                        <Picker.Item label='A couple times a week' value='coupleweek' />
                        <Picker.Item label='Daily' value='daily' />
                        <Picker.Item label='Multiple times a day' value='multiday' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.handleSubmit({ questionNum, dispatch, navigation })}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        maleQuestions: state.maleQuestions
    };
}

export default connect(mapStateToProps)(Marijuana);
