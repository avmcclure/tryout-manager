import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants';

import Unassigned from 'Components/Unassigned';

const spec = {
    drop(props, monitor) {
        // Obtain the dragged item
        const item = monitor.getItem();
        return { moved: true };
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        itemType: monitor.getItemType()
    };
};

export default DropTarget(ItemTypes.PLAYER, spec, collect)(Unassigned);
