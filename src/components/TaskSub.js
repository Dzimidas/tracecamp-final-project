function TaskSub({ id, handleSub }) {
  return (
    <>
      <div
        className="shadow-lg border-2 border-green-900 bg-green-700 text-white text-3xl rounded-full h-8 w-8 flex items-center justify-center pb-1.5 cursor-pointer hover:bg-green-500"
        onClick={()=>handleSub(id)}
      >
        -
      </div>
    </>
  );
}

export default TaskSub;