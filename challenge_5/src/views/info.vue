<template>
    <div class="space-y-5  ">
        <div class="space-y-3">
            <div class="text-4xl font-bold">Personal Info</div>
            <div class="font-medium text-gray-400">Please Provide your name, email address, phone number</div>
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col ">
                <label for="">Name</label>
                <input placeholder="e.g.Youssef Tarek" type="text" class="border-gray-300 border-2 p-2 rounded-lg outline-none">
            </div>
            <div class="flex flex-col ">
                <label for="">Email Address</label>
                <input placeholder="e.g.youssef.tarek@example.com" type="text" class="border-gray-300 border-2 p-2 rounded-lg outline-none">
            </div>
            <div class="flex flex-col ">
                <label for="">Phone Number</label>
                <input placeholder="e.g.+0112223334" type="text" class="border-gray-300 border-2 p-2 rounded-lg outline-none">
            </div>
        </div>
    </div>
</template>