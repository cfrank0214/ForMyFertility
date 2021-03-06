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

let weight = [];

let lowWeight = 75;
let highWeight = 450;
let  questionNum, questionTot;
for (let i = highWeight; i >= lowWeight; i--) {
    weight.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class Weight extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('SweetDrinks')
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
                    <Text>How much do you weigh (in lbs)?</Text>
                    <Control.Picker model=".weight" >
                        {weight}
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

export default connect(mapStateToProps)(Weight);
