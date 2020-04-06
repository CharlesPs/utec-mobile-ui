
import RNFetchBlob from "rn-fetch-blob"
import Exif from 'react-native-exif2'

const getImageOrientation = async (imageUrl, imageName) => {

    const path = RNFetchBlob.fs.dirs.CacheDir + '_inmutable_images/' + imageName + '.jpg'

    try {
        
        const exists = await RNFetchBlob.fs.exists(path)

        if (!exists) {

            await RNFetchBlob.config({ path }).fetch('GET', imageUrl, {})
        }

        const msg = await Exif.getExif(path)

        return msg.Orientation
    } catch (error) {
        
        console.log('ImagesHelper.getImageOrientation', error.message)
    }
}

export default {
    getImageOrientation,
}
