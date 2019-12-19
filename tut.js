function treeCreate() {
    let tree = {
        'id': 1,
        'value': 1,
        'children': [
            {
                'id': 2,
                'value': 1,
                'children': [
                    {
                        'id': 5,
                        'value': 1,
                        'children': [
                            {
                                'id': 1,
                                'value': 1,
                                'children': [
                                ]
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'value': 1,
                        'children': [
                            {
                                'id': 11,
                                'value': 1,
                                'children': [
                                    {
                                        'id': 12,
                                        'value': 1,
                                        'children': [
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                'id': 3,
                'value': 1,
                'children': [
                    {
                        'id': 7,
                        'value': 1,
                        'children': [

                        ]
                    },
                    {
                        'id': 8,
                        'value': 1,
                        'children': [
                        ]
                    }
                ]
            },
            {
                'id': 5,
                'value': 1,
                'children': [
                ]
            }
        ]
    };
    // for (let i = 0; i < n; i++) {
    //     console.log('hello');
    // }
    return tree;
}

var tree = treeCreate();

function findMinInTree(node, arr, total) {
   let arr2 = arr;
    if (node.children.length == 0) {
      
       arr2.push(node.id);
        return { 'current': node.id,'way': arr, 'distance': total + node.value };
    } else {

        let minValue = null;

        for (let i = 0; i < node.children.length; i++) {
            let tmp = findMinInTree(node.children[i], arr2, total + node.children[i].value);
            console.log(tmp);
            if (minValue == null) {
                minValue = tmp;
            } else {
                if (minValue.distance < tmp.distance) {
                    minValue = tmp;
                }
            }
        }
        //console.log(minValue);
        return minValue;
    }
}
// findMinInTree(tree, [1], 1);
console.log(findMinInTree(tree, [], 0));
