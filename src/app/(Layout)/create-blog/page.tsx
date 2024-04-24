import Input from "@/ui/Input";

export default function page() {
    return (
        <div>
            <div className="py-20 max-w-[500px] mx-auto ">
                <h2 className="text-3xl py-6 font-bold">Write a Blog </h2>
                <form  >
                    <Input type='email' label='Title' name='title' />
                    <Input type='text' label='Description' name='des' />
                    <input type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />
                    <button className="btn mt-8 btn-success text-white w-80 md:w-[500px] ">Post</button>
                </form>
            </div>
        </div>
    )
}
