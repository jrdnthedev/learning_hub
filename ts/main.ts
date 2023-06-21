// import { Video } from "./video";

let isListToggle = false;
let toggleFilterMenu = false;
let isMobileMenuToggle = false;
//util class
const toggle_btn = document.querySelectorAll('#faq_section .toggle_btn');
const filter_menu = document.getElementById('filter_btn');
const menu = document.getElementById('filter_menu');
const close_btn = document.getElementById('filter_close_btn');
const hamburger = document.getElementById('hamburger_link');
const mobile_menu = document.getElementById('navigation');
const mobile_menu_close = document.getElementById('menu_close_btn');
//util class
filter_menu?.addEventListener('click',toggleMenu);
//util class
close_btn?.addEventListener('click',toggleMenu);
//util class
hamburger?.addEventListener('click', toggleMobileMenu);
mobile_menu_close?.addEventListener('click', toggleMobileMenu);
//video class
const apply_filter = document.getElementById('apply_button');
//video class
const clear_all_filter = document.getElementById('clear_all_filter');
//video class
const library_videos = document.getElementById('library_videos');
//video class

//video class
const videos = [
    {
        "title": "How to look up quotes for stocks and other securities",
        "category": "video",
        "tags": ["tfsa","advice","investments"],
        "date":"January 15th, 2023",
        "video_link": "youtube.ca",
        "video_length": "2:03"
    },
    {
        "title": "How to look up quotes for stocks and other securities",
        "category": "podcast",
        "tags": ["movemoney","fundtransfer","man"],
        "date":"June 12th, 2023",
        "video_link": "youtube.ca",
        "video_length": "2:03"
    },
    {
        "title": "How to look up quotes for stocks and other securities",
        "category": "video",
        "tags": ["stcokoptions","beta","account"],
        "date":"June 8th, 2023",
        "video_link": "youtube.ca",
        "video_length": "2:03"
    },
    {
        "title": "How to look up quotes for stocks and other securities",
        "category": "video",
        "tags": ["test","advice","orion"],
        "date":"May 8th, 2023",
        "video_link": "youtube.ca",
        "video_length": "2:03"
    },
    {
        "title": "How to look up quotes for stocks and other securities",
        "category": "pdf",
        "tags": ["jane","investments","lest"],
        "date":"April 8th, 2023",
        "video_link": "youtube.ca",
        "video_length": "2:03"
    }
]
//util class
toggle_btn.forEach( button => {
    button.addEventListener("click", function(){
        isListToggle = !isListToggle;
        if(isListToggle){
            this.nextElementSibling?.classList.add('active');
            this.classList.add('active');
            
        } else {
            this.nextElementSibling?.classList.remove('active');
            this.classList.remove('active');
        }
        this.ariaExpanded = isListToggle;
    });
})
//util class
function toggleMenu() {
    toggleFilterMenu = !toggleFilterMenu;
    if(toggleFilterMenu) {
        this.classList.add('active');
        menu?.classList.add('open');
    } else {
        this.classList.remove('active');
        menu?.classList.remove('open');
    }
    this.ariaExpanded = toggleFilterMenu;
}
//util class
function toggleMobileMenu() {
    isMobileMenuToggle = !isMobileMenuToggle;
    if(isMobileMenuToggle) {
        this.classList.add('active');
        mobile_menu?.classList.add('open');
    } else {
        this.classList.remove('active');
        mobile_menu?.classList.remove('open');
    }
    this.ariaExpanded = isMobileMenuToggle;
}


window.onload = (event) => {
    const vid =  new Video();
    vid.loadVideos(videos);

    clear_all_filter?.addEventListener('click', function(){
        vid.removeAllChildNodes(library_videos);
        vid.loadVideos(videos);
    });

    apply_filter?.addEventListener('click', function() {
        vid.filter(videos,library_videos);
    });

    
};

class Video {
    
    constructor(){}

    filter(list:any, lib: any, ): void {
        const options = document.querySelectorAll("#filter_menu_list input") as NodeListOf<HTMLInputElement>;
        let checked_items:any = [];
        for(let i = 0; i < options.length; i++) {
            if(options[i].checked) {
                checked_items.push(options[i]);
            }
        }
        console.log(checked_items);
        const filtered_list = list.filter((item: any) => item.category === 'pdf');
        this.removeAllChildNodes(lib);
        this.loadVideos(filtered_list);
    }

    removeAllChildNodes(parent: any): void {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    loadVideos(item: any): void {
        item.forEach((element: any) => {
            const figure = document.createElement("figure");
            const figcaption = document.createElement("figcaption");
            const video = document.createElement("video");
            const paragraph = document.createElement("p");
            const date_added = document.createElement("span");
            const video_length = document.createElement("span");
            const source = document.createElement("source");
            const source_backup = document.createElement("source");
            const link = document.createElement("a");
            const link_backup = document.createElement("a");
            const library_videos = document.getElementById('library_videos');
            source.src = '/media/cc0-videos/flower.webm';
            source.type = "video/webm";
            source_backup.src = '/media/cc0-videos/flower.mp4';
            source_backup.type = 'video/mp4';
            link.href = '/media/cc0-videos/flower.webm';
            link_backup.href = '/media/cc0-videos/flower.mp4';
            paragraph.textContent = element.title;
            paragraph.classList.add('paragraph');
            date_added.textContent = element.date;
            date_added.classList.add('video_length');
            video_length.textContent = element.video_length;
            video_length.classList.add('video_length');
            video.controls = true;
            video.append(source,source_backup,link,link_backup);
            figcaption.append(date_added,video_length, paragraph);
            figure.append(video,figcaption);
            library_videos?.append(figure);
        });
    }
}