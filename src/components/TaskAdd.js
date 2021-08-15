function TaskAdd({ handleAdd }) {
  return (
    <>
      <div
        className="shadow-lg border-2 border-green-900 bg-green-700 text-white text-2xl rounded-full h-8 w-8 flex items-center justify-center pb-1 cursor-pointer hover:bg-green-500"
        onClick={handleAdd}
      >
        +
      </div>
    </>
  );
}

export default TaskAdd;
