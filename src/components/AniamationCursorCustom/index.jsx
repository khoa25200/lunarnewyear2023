import AnimatedCursor from 'react-animated-cursor';
function AnimationCursorCustom() {
    return (
        <AnimatedCursor
            innerSize={20}
            outerSize={20}
            color="255, 255, 255"
            outerAlpha={0.2}
            // innerStyle={{
            //     backgroundImage : "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fcaycanh4mua.com%2Fchi-tiet%2Fcay-thien-phuc-cay-hoa-phao-bong&psig=AOvVaw1z9TAFwcor4F_dB6Qc8DTU&ust=1672660678910000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjShN2opvwCFQAAAAAdAAAAABAJ')"
            // }}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
            ]}
        />
    );
}

export default AnimationCursorCustom;
