import './box.css';
import {items} from "../../../constants/items";

function Box() {
    return (
        <div className='box-main'>
            <div className='box-row'>
                {
                    items.slice(0,5).map(item =>
                        <div className='box-inside'
                             id={item.id}
                             style={{
                                 width:item.width,
                                 height:item.height,
                                 backgroundColor:item.color,
                             }}>
                            {
                                item.btnColor?<div className='box-btn' style={{backgroundColor:item.btnColor, boxShadow:item.btnShadow}}><p>+</p></div>:''
                            }
                            <p className='box-name'>{item.name}</p>
                        </div>
                    )
                }
            </div>

            <div className='box-row' style={{marginTop: '32px'}}>
                {
                    items.slice(6,11).map(item =>
                        <div className='box-inside'
                             id={item.id}
                             style={{
                                 width:item.width,
                                 height:item.height,
                                 backgroundColor:item.color}}>
                            {
                                item.btnColor?<div className='box-btn' style={{backgroundColor:item.btnColor, boxShadow:item.btnShadow}}><p>+</p></div>:''
                            }
                            <p className='box-name'>{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Box;
