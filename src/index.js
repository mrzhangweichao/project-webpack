// import _ from 'lodash';
// import printMe from './print';
// import './style.css'
// import Icon from './icon.jpg'
// import Data from './data.xml'

import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


function component() {
    let element = document.createElement('div')
    // // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['张', '伟超6'], ' ');

    // var btn = document.createElement('button')
    // btn.innerHTML = '点击这里，然后查看 console！'
    // btn.onclick = printMe
    // element.appendChild(btn)

    // element.classList.add('hello')

    // var myIcon = new Image()
    // myIcon.src = Icon
    // element.appendChild(myIcon)

    // console.log(Data)


    var element = document.createElement('pre')
    element.innerHTML = [
        'zhangweichao',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')


    return element;
}
document.body.appendChild(component())
// let element = component()
// document.body.appendChild(element)

// if(module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!')
//         // printMe()
//         document.body.removeChild(element)
//         element = component() // Re-render the "component" to update the click handler
//         element = component() // 重新渲染 "component"，以便更新 click 事件处理函数
//         document.body.appendChild(element)
//     })
// }