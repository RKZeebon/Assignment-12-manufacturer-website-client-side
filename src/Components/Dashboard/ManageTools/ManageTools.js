import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPages/Loading';
import ManageTool from './ManageTool';
import RemoveToolModal from './RemoveToolModal';

const ManageTools = () => {
    const [removingToolId, setRemovingToolId] = useState('')
    const [removingToolTitle, setRemovingToolTitle] = useState('')
    const { isLoading, data: tools, refetch } = useQuery('allTools', () =>
        fetch('https://rkz-mason-tools.herokuapp.com/tools').then(res =>
            res.json()))


    if (isLoading) {
        return <Loading />
    }


    const handleRemove = (id, title) => {
        setRemovingToolId(id)
        setRemovingToolTitle(title)
    }

    return (
        <div>
            <h1 className='text-xl text-center font-semibold mt-5 mb-2'>Manage Tools</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Item</th>
                            <th>Available</th>
                            <th>Min. Order</th>
                            <th>Unit Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((tool, index) => <ManageTool
                                key={tool._id}
                                tool={tool}
                                index={index}
                                handleRemove={handleRemove}
                            ></ManageTool>)
                        }
                    </tbody>
                </table>
                <RemoveToolModal
                    removingToolId={removingToolId}
                    removingToolTitle={removingToolTitle}
                    refetch={refetch}
                />
            </div>
        </div>
    );
};

export default ManageTools;