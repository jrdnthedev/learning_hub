export class Video {
    
    constructor(){}

    filter(list:any, lib: any): void {
        const filtered_list = list.filter((item: any) => item.category === 'video');
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