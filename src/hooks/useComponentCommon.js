import { computed } from 'vue';
import { pick } from 'lodash-es';
const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick
    };
};
export default useComponentCommon;
//# sourceMappingURL=useComponentCommon.js.map