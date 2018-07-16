import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants';
import Player from 'Components/Player';

const playerSource = {
    beginDrag(props) {
        return {
            number: props.number,
            name: props.name
        };
    }
};


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);